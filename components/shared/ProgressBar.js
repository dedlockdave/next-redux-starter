import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const ProgressBar = ({ title = "Loading", stages, isCompleted }) => {
  const [currentStage, setCurrentStage] = useState(0)
  const [progress, setProgress] = useState(0)

  const totalDuration = stages.reduce((acc, stage) => acc + stage.duration, 0)

  useEffect(() => {
    if (isCompleted) {
      setProgress(100)
    }
  }, [isCompleted])

  useEffect(() => {
    if (currentStage >= stages.length) {
      if (!isCompleted) {
        setProgress(99)
      }
    } else {
      const progressPerStage =
        (stages[currentStage].duration / totalDuration) * 100
      let timeoutId = setTimeout(() => {
        if (isCompleted) return null
        setProgress((prevProgress) => prevProgress + progressPerStage)
        setCurrentStage((prevStage) => prevStage + 1)
      }, stages[currentStage].duration)

      return () => clearTimeout(timeoutId)
    }
  }, [currentStage, stages, totalDuration, isCompleted])

  return (
    <div className="flex flex-col w-full items-center justify-center h-full">
      <p className="text-3xl mb-8">{title}</p>
      <div className="w-full max-w-md px-4 py-2 border-2 border-gray-200 rounded overflow-hidden">
        <p></p>
        <div
          className="h-2 bg-purple1 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <AnimatePresence>
        {stages.map((stage, index) => {
          if (isCompleted) return null
          if (index == currentStage) {
            return (
              <motion.h2
                key={stage.stage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="mt-4 text-xl text-gray-700"
              >
                {stage.stage}
              </motion.h2>
            )
          } else {
            return null
          }
        })}
        {currentStage == stages.length && !isCompleted ? (
          <motion.h2
            key={"FINAli"}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="mt-4 text-xl text-demph2"
          >
            Finalizing...
          </motion.h2>
        ) : null}
      </AnimatePresence>
      {isCompleted && progress === 100 && (
        <motion.h2
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          className="mt-4 text-2xl"
        >
          Done 🚀
        </motion.h2>
      )}
    </div>
  )
}

export default ProgressBar
