const parseData = fetch("https://randomuser.me/api");

parseData
  .then((responseData) => {
    if (!responseData.ok) {
      throw new Error('Network response was not ok');
      console.error('error in 1st then')
    }
    return responseData.json();
  })


  .then((data) => {
    //profile pic
    if (data.results[0].location.country = 'India' ){
        const profilePic = data.results[0].picture.large;
        document.querySelector('.profile-pic').setAttribute('src',profilePic);
        // username
        const userName = '@'+ data.results[0].login.username;
        document.querySelector('.username').innerText = userName;
        //name
        const name = data.results[0].name.first + ' ' + data.results[0].name.last;
        document.getElementById('name').innerText = name;
        //age , gender
        const agegender = data.results[0].dob.age +' , '+ data.results[0].gender;
        document.getElementById('gender').innerText= agegender;
        //date of birth
        let dob = data.results[0].dob.date;
        dob = `${dob}`.slice(0,10);
        document.getElementById('dob').innerText = `DOB : ${dob}`;
        //location
        const location = data.results[0].location.city +' , '+ data.results[0].location.country;
        document.getElementById('location').innerText = location ;
        //map
        const latitude = data.results[0].location.coordinates.latitude ;
        const longitude = data.results[0].location.coordinates.longitude;
        const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        document.getElementById('map').addEventListener('click', () => {
        window.open(mapLink, '_blank');
        console.log(latitude,longitude)
        });
        //phone number
        const phno = data.results[0].cell;
        document.getElementById('phoneNum').innerText= 'Ph.no: '+phno;
        document.getElementById('phoneNum').setAttribute('href','tel:'+phno);
        //email
        let mail = data.results[0].email;
        mail = `${mail}`.replace('example','gmail');
        document.getElementById('mail').innerText= 'Email: '+mail;
        document.getElementById('mail').setAttribute('href','mailto:'+mail);
    }else{
        console.error("Error in country condition")
    }
    console.log('error in 2nd then');
  })


  .catch((error) => {
    console.error('Error:', error);
    console.log('error in catch')
  });