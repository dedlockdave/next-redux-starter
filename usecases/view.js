import { useDispatch, useSelector } from "react-redux"
import { setIsLoginModalOpen, setIsSignupModalOpen } from "../state/viewSlice"

export function useLoginModal() {
  let dispatch = useDispatch()
  function openLoginModal() {
    dispatch(setIsLoginModalOpen(true))
  }

  function closeLoginModal() {
    dispatch(setIsLoginModalOpen(false))
  }

  return {
    openLoginModal,
    closeLoginModal,
  }
}

export function useSignupModal() {
  let dispatch = useDispatch()
  let { isSignupModalOpen } = useSelector((state) => state.helper)
  function openSignupModal() {
    dispatch(setIsSignupModalOpen(true))
  }

  function closeSignupModal() {
    dispatch(setIsSignupModalOpen(false))
  }

  return {
    isSignupModalOpen,
    openSignupModal,
    closeSignupModal,
  }
}
