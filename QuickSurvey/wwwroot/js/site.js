$(document).ready(function () {
   
    $('#init-form').submit(function (e) {
        e.preventDefault(); 

     
        $('#location-info-form').hide();
        $('.list-group-item').removeClass('active');
        $('.list-group-item').eq(1).addClass('active');

     
        $('#contact-info-form').show();

     
        $('#add-new').hide();

        $('#message').hide(); 
    });

    // Modal pop-upp handling for adding new medium 
    $('#add-new').click(function () {
        $('#addlocationModal').modal('show');
    });

    // Save medium functionality in the modal
    $('#saveLocation').click(function () {
        const selectedLocation = $('#locationSelect').val();
        if (selectedLocation) {
            // we add new medium to the dropdown
            $('#locationvar').append(`<option>${selectedLocation }</option>`);
            $('#addlocationModal').modal('hide');
            $('#locationSelect ').val(''); 
        } else {
            alert("Please select a location."); 
        }
    });

    
    $('#contact-form').submit(function (event) {
        event.preventDefault(); 

        // Collect form data
        const locationvar = $('#locationvar').val();
        const feedback = $('#feedback').val();
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();

        //  data for submission
        const formVariables = {
            location: locationvar,
            feedback: feedback,
            name: name,
            email: email,
            phone: phone
        };

        // AJAX request to submit the form
        $.ajax({
            url: '/api/submission',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formVariables),
            success: function (response) {
                alert('Survey submitted successfully!');
                // go to the view submissions page
                window.location.href = '/ViewSubmissions';
            },
            error: function () {
                alert('Submission failed. Please try again.');
            }
        });
    });
});
