function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('error-message').style.display = 'none'; // Hide error message
}

function showCalculator() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('calculator').style.display = 'block';
    document.getElementById('error-message').style.display = 'none'; // Hide error message
}

function showError(message) {
    const errorDiv = document.getElementById('error-message');
    if (message) {
        errorDiv.innerHTML = message;
        errorDiv.style.display = 'block';
    } else {
        errorDiv.style.display = 'none'; // Hide error message when there is no error
    }
}

function calculateStacks() {
    const itemCount = document.getElementById('itemCount').value;
    if (itemCount) {
        const stacks = Math.floor(itemCount / 64);
        const remaining = itemCount % 64;
        document.getElementById('result').innerHTML = `
            <h4>Calculation Result:</h4>
            <p>${stacks} stack(s) and ${remaining} item(s)</p>
        `;
        // Clear error message if present
        showError('');
    } else {
        showError('Please enter a number in the "عدد العناصر" field.');
    }
}

function addBlock() {
    const blockName = document.getElementById('blockName').value;
    const itemCount = document.getElementById('itemCount').value;
    if (blockName && itemCount) {
        const stacks = Math.floor(itemCount / 64);
        const remaining = itemCount % 64;
        const blockInfo = `${stacks} stack(s) and ${remaining} item(s)`;
        const shulkerCapacity = 27 * 64; // Shulker Box capacity
        const shulkersRequired = Math.ceil(itemCount / shulkerCapacity);

        const blockContainer = document.createElement('div');
        blockContainer.className = 'block';
        blockContainer.innerHTML = `
            <div>
                <div><strong>${blockName}</strong></div>
                <div>${blockInfo}</div>
                <div><strong>Shulkers Required:</strong> ${shulkersRequired}</div>
            </div>
            <button class="delete-btn" onclick="deleteBlock(this)">Delete</button>
        `;
        document.getElementById('blocks').appendChild(blockContainer);
        
        // Clear input fields after adding the block
        document.getElementById('blockName').value = '';
        document.getElementById('itemCount').value = '';
        // Clear error message if present
        showError('');
        // Hide calculation result
        document.getElementById('result').innerHTML = '';
    } else {
        showError('Please fill in both the "اسم البلوكة" and "عدد العناصر" fields.');
    }
}

function deleteBlock(button) {
    button.parentElement.remove();
}
