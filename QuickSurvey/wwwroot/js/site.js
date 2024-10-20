$(document).ready(function () {
    // Handle the product recommendation form submission
    $('#init-form').submit(function (e) {
        e.preventDefault(); // Prevent default form submission

        // Hide product recommendation form
        $('#init-form').hide();

        // Show contact information section
        $('#contact-info').show();

        $('#add-new').hide();

        $('#message').hide();
    });

    // Modal handling for adding new product
    $('#add-new').click(function () {
        $('#addproductModal').modal('show');
    });

    // Save product functionality
    $('#saveProduct').click(function () {
        const newProduct = $('#newProduct').val();
        if (newProduct) {
            $('#productChoice').append(`<option>${newProduct}</option>`);
            $('#addproductModal').modal('hide');
            $('#newProduct').val('');
        }
    });

    // Handle submission of the contact form
    $('#contact-form').submit(function (event) {
        event.preventDefault(); 

        // Collect all the data
        const productChoice = $('#productChoice').val();
        const feedback = $('#feedback').val();
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();

        const formVariables = {
            product: productChoice,
            feedback: feedback,
            name: name,
            email: email,
            phone: phone
        };

        //  AJAX request to save submission
        $.ajax({
            url: '/api/submission',
            type: 'POST',
            contentType: 'application/json',
            // Send data as JSON
            data: JSON.stringify(formVariables), 
            success: function (response) {
                alert('Survey submitted successfully!');
                 // Redirect to the view submissions page
                window.location.href = '/ViewSubmissions';
               
            },
            error: function () {
                alert('Submission failed. Please try again.'); 
            }
        });
    });
});
