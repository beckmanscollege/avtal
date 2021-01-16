document.addEventListener('DOMContentLoaded', function () {
	const courseCode = document.querySelector('#course-code')
	const courseResponsible = document.querySelector('#course-responsible')
	const contractor = document.querySelector('#contractor')
	const dateStart = document.querySelector('#assignment-date-start')
	const dateEnd = document.querySelector('#assignment-date-end')
	const date = document.querySelector('#agreement-date')
	const hourlyFee = document.querySelector('#hourly-fee')
	const hours = document.querySelector('#hours')
	const total = document.querySelector('#total')
	const inputs = document.querySelectorAll('input')

	courseCode.addEventListener('keyup', (e) => {
		updateTitle()
	})

	courseResponsible.addEventListener('keyup', (e) => {
		document.querySelectorAll('.course-responsible').forEach((element) => {
			element.innerHTML = courseResponsible.value
		})
		updateTitle()
	})

	contractor.addEventListener('keyup', (e) => {
		document.querySelectorAll('.contractor').forEach((element) => {
			element.innerHTML = contractor.value
		})
		updateTitle()
	})

	dateStart.addEventListener('change', (e) => {
		dateEnd.setAttribute('min', dateStart.value)
		if (dateEnd.value < dateStart.value) dateEnd.value = dateStart.value
	})

	date.addEventListener('change', (e) => {
		var span = document.querySelector('.agreement-date')
		span.innerHTML = date.value
	})
	;[hourlyFee, hours].forEach((element) => {
		element.addEventListener('change', (e) => {
			updateValue()
		})
		updateValue()
	})

	function updateValue() {
		let x = hourlyFee.value
		let y = hours.value
		total.value = x * y
		console.log(total.value)
	}

	for (let input of inputs) {
		document.querySelectorAll(`.${input.id}`).forEach((element) => {
			element.innerHTML = input.placeholder
		})
		if (input.type == 'date') {
			let today = new Date()
			let yyyy = today.getFullYear()
			let mm = today.getMonth() + 1
			let dd = today.getDate()
			if (mm < 10) mm = '0' + mm
			if (dd < 10) dd = '0' + dd
			input.value = `${yyyy}-${mm}-${dd}`
			input.innerHTML = input.value
			input.dispatchEvent(new Event('change'))
		}
	}

	function updateTitle() {
		document.title = `Beckmans Gästläraravtal ${courseCode.value} ${contractor.value} `
	}
})
