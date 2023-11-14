import { cloneElement, useEffect } from "react"
import { useForm } from "../../usecases/forms/useForm"

export default function Form({ formKey, children, runValidations }) {
  let {
    formValues,
    validationValues,
    updateForm,
    setIsValid,
    initInputsToValidate,
  } = useForm(formKey)

  let arrChildren = children

  if (!Array.isArray(children)) {
    arrChildren = [children]
  }

  useEffect(() => {
    if (!formKey || !!validationValues) return
    let dedupName = {}
    let fieldsToValidate = {}
    arrChildren.forEach((child) => {
      if (dedupName[child.props.name]) {
        console.error("found duplicated name on form inpnuts")
        return
      } else {
        dedupName[child.props.name] = true
      }

      if (child.props.validator || child.props.validateType) {
        fieldsToValidate[child.props.name] = false
      }
    })

    initInputsToValidate(fieldsToValidate)
  }, [])

  // stupid as fuck but this fails if only one child cuz by default react sends as object and not array
  /// gotta add a check later and force to array if not type
  return arrChildren.map((child, i) => {
    return cloneElement(child, {
      ...child.props,
      validator:
        child.props.validator ?? chooseValidator(child.props.validateType),
      key: `${formKey}_${child.props.name}_${i}`,
      isValidatable: runValidations,
      value:
        child.props.value ??
        formValues[child.props.name] ??
        child.props.initial,
      onInput: child.props.onInput ?? updateForm,
      handleSetValidation: setIsValid,
      formCreated: !!formValues,
    })
  })
}

function chooseValidator(validateType) {
  switch (validateType) {
    case "presence":
      return validatePresence
    default:
      return ""
  }
}

function validatePresence(vals) {
  if (!vals) return false
  return true
}
