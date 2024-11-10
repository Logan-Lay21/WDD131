// 1. When the page loads set the current number of participants equal to 1
let participantCount = 1;

// Create template for new participant
function participantTemplate(count) {
    return `
    <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname${count}"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname" value="" required="">
        </div>
        <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity">
        </div>
        <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee">
        </div>
        <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date">
        </div>
        <div class="item">
            <p>Grade</p>
            <select id = "grade${count}">
            <option selected="" value="" disabled=""></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
            </select>
        </div>
    </section>`;
}


// Calculate total fees using the provided function stub from instructions
function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, fee) => {
        return total + (Number(fee.value) || 0);
    }, 0);
}

// Success message template
function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.fees} in Fees.`;
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get form and add button
    const form = document.querySelector('form');
    const addButton = document.querySelector('fieldset button');

    // 2. Add event listener to the Add Participant button
    addButton.addEventListener('click', function(e) {
        e.preventDefault();
        participantCount++;
        // Insert new participant before the add button
        addButton.insertAdjacentHTML('beforebegin', participantTemplate(participantCount));
    });

    // Form submission handler
    form.addEventListener('submit', function(e) {
        // Keep form from doing what it normally would
        e.preventDefault();
        
        // Get adult name from the form
        const adultName = document.querySelector('input[name="name"]').value;
        
        // Calculate total fees
        const totalFee = totalFees();
        
        // Hide the Form
        form.style.display = 'none';
        
        // Show the summary element with the message
        const summary = document.getElementById('summary');
        summary.innerHTML = successTemplate({
            name: adultName,
            participants: participantCount,
            fees: totalFee
        });
        summary.style.display = 'block';
    });
});