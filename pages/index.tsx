import MainArea4 from "../components/layoutV4/MainArea4"
import React, { useState } from "react"

import dynamic from "next/dynamic"

const PDFUpload = dynamic(() => import("../components/pdf/pdf"), {
    ssr: false,
})

export default function Learn() {
    return (
        <MainArea4>
            <PDFUpload />
        </MainArea4>
    )
}
