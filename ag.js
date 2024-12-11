// Function to change columns 2 and 3 based on the sponsor clicked
function changeSponsor(sponsor) {
    // Get the page title element
    const pageTitle = document.getElementById('page-title');

    if (sponsor === 1) {
        // Change page title for Sponsor 1
        pageTitle.innerText = 'Sponsor 1 Table';

        // Default arrangement for Sponsor 1
        document.getElementById('item1').innerText = 'Item 1';
        document.getElementById('def1').innerText = 'Definition 1';
        document.getElementById('item2').innerText = 'Item 2';
        document.getElementById('def2').innerText = 'Definition 2';
        document.getElementById('item3').innerText = 'Item 3';
        document.getElementById('def3').innerText = 'Definition 3';
        document.getElementById('item4').innerText = 'Item 4';
        document.getElementById('def4').innerText = 'Definition 4';
        document.getElementById('item5').innerText = 'Item 5';
        document.getElementById('def5').innerText = 'Definition 5';
    } else if (sponsor === 2) {
        // Change page title for Sponsor 2
        pageTitle.innerText = 'Sponsor 2 Table';

        // Custom mapping for Sponsor 2
        document.getElementById('item1').innerText = 'Item 5';
        document.getElementById('def1').innerText = 'Definition 5';
        document.getElementById('item2').innerText = 'Item 4';
        document.getElementById('def2').innerText = 'Definition 4';
        document.getElementById('item3').innerText = 'Item 3';
        document.getElementById('def3').innerText = 'Definition 3';
        document.getElementById('item4').innerText = 'Item 2';
        document.getElementById('def4').innerText = 'Definition 2';
        document.getElementById('item5').innerText = 'Item 1';
        document.getElementById('def5').innerText = 'Definition 1';
    } else if (sponsor === 3) {
        // Change page title for Sponsor 3
        pageTitle.innerText = 'Sponsor 3 Table';

        // Default for Sponsor 3 (can be customized)
        document.getElementById('item1').innerText = 'Item 1';
        document.getElementById('def1').innerText = 'Definition 1';
        document.getElementById('item2').innerText = 'Item 2';
        document.getElementById('def2').innerText = 'Definition 2';
        document.getElementById('item3').innerText = 'Item 3';
        document.getElementById('def3').innerText = 'Definition 3';
        document.getElementById('item4').innerText = 'Item 4';
        document.getElementById('def4').innerText = 'Definition 4';
        document.getElementById('item5').innerText = 'Item 5';
        document.getElementById('def5').innerText = 'Definition 5';
    } else if (sponsor === 4) {
        // Change page title for Sponsor 4
        pageTitle.innerText = 'Sponsor 4 Table';

        // Default for Sponsor 4 (can be customized)
        document.getElementById('item1').innerText = 'Item 1';
        document.getElementById('def1').innerText = 'Definition 1';
        document.getElementById('item2').innerText = 'Item 2';
        document.getElementById('def2').innerText = 'Definition 2';
        document.getElementById('item3').innerText = 'Item 3';
        document.getElementById('def3').innerText = 'Definition 3';
        document.getElementById('item4').innerText = 'Item 4';
        document.getElementById('def4').innerText = 'Definition 4';
        document.getElementById('item5').innerText = 'Item 5';
        document.getElementById('def5').innerText = 'Definition 5';
    } else if (sponsor === 5) {
        // Change page title for Sponsor 5
        pageTitle.innerText = 'Sponsor 5 Table';

        // Default for Sponsor 5 (can be customized)
        document.getElementById('item1').innerText = 'Item 1';
        document.getElementById('def1').innerText = 'Definition 1';
        document.getElementById('item2').innerText = 'Item 2';
        document.getElementById('def2').innerText = 'Definition 2';
        document.getElementById('item3').innerText = 'Item 3';
        document.getElementById('def3').innerText = 'Definition 3';
        document.getElementById('item4').innerText = 'Item 4';
        document.getElementById('def4').innerText = 'Definition 4';
        document.getElementById('item5').innerText = 'Item 5';
        document.getElementById('def5').innerText = 'Definition 5';
    }
}

// Function to copy content to clipboard when clicked
function copyToClipboard(id) {
    const textToCopy = document.getElementById(id).innerText;

    // Create a temporary text area element to copy the content
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Select and copy the text
    tempTextArea.select();
    document.execCommand('copy');

    // Remove the temporary text area element
    document.body.removeChild(tempTextArea);

    // Optionally, show a success message or use alert
    alert(`Copied: ${textToCopy}`);
}
