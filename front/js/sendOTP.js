
window.addEventListener('load', () => {   
        console.log('DOM fully loaded and parsed');
        const sendOTPForm = document.querySelector('.sendot');

        console.log(sendOTPForm);
        sendOTPForm.addEventListener('click', async (e) => {
            e.preventDefault();
            console.log('Button clickedx');
            const email = document.getElementById('email').value;
            console.log("yy",email);
            const response = await fetch(`/api/sendOTP?email=${email}`);
            const result = await response.json();

            
            // console.log(result);
            alert(result.message);
            if (result.success) {
                window.location.href = 'verifyOTP.html';
            }
        });
    }
);