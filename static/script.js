let resultBox = document.getElementById("result-box")
let result = document.getElementById("result")
let form = document.getElementById("stress-form")

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  try {
    const formData = new FormData(form)

    const response = await fetch("/", {
      method: "POST",
      body: formData
    })

    if (!response.ok) {
      throw new Error("Network Query Failed")
    }

    const data = await response.json()

    const stress = data["stress_prediction"]
    showResult(stress)
  } catch (error) {
    console.error("Data exchange Failed : ", error)
    alert("An error occurred while connecting with AI engine.")
  }
})

const showResult = (stress) => {
  var stressType
  resultBox.removeAttribute("class")
  if (stress <= 3) {
    stressType = "Normal"
    resultBox.classList.add("low-stress")
  } else {
    stressType = "High"
    resultBox.classList.add("high-stress")
  }
  result.innerText = `Stress Level (1-5) : ${stress} ${stressType}`
}
