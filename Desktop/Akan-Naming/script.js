
function akin_name(){ //function gets run when user presses submit


   let birth = document.getElementById('date').value; //This gets the value given in the date form
   let gender = document.getElementsByName('gender');//This gets the gender of the user


   let dob=new Date(birth)//so am mapping the date given to a date function in javascript
   let DD = dob.getDate();//This gets me the date
   let MM1=dob.getMonth();//This gets me the month
   let year = dob.getFullYear();//gets me the year
   let year1=year.toString();//now this turns it to string so i can split year from 2022 to 20 and 22 for CC AND YY IN THE FORMULAE
   let CC1= year1[0] + year1[1]//here i combine the first two digits
   let YY1= year1[2] + year1[3]//here i combine the last two digits
   CC=parseInt(CC1)//they were in string format now i change to integer format since you cant add strings
   YY=parseInt(YY1)
   MM=MM1+1;//WHen it Picks the month it starts at 0 instead of 1 e.g January=0 instead January=1 so by adding one enables months to be designated as March=2+1=3

   let d2=(((CC/4)-2*CC-1)+((5 * YY/4))+((26*(MM+1)/10))+DD)%7//formulae given

   d1=Math.floor(d2)//since it may give a float the floor function rounds off to the lower integer e.g 5.788=5
   d=Math.abs(d1)//tHIS ENSURES all values will be transformed to positive   


   //Below its a function to get input from radio button whichever the user selected. It
   //is a loop for the options in gender, the one marked, pick that one
   for (let i of gender) {

    if (i.checked) {
        let gender= i.value;


        //Below is a combination of switch and if -else statement where 
        //if it is male
        //and the resut from formulae returns either 0 or 1 or 2 print this
   
    if(gender=='Male'){
        switch(d){
            case 0:
                alert("Hello, your Akan name is Kwasi");
                break;
            case 1:
                alert("Hello, your Akan name is Kwadwo");
                break;
            case 2:
                alert("Hello, your Akan name is kwabena");
                break;
            case 3 :
                alert("Hello, your Akan name is Kwaku");
                break;
            case 4:
                alert("Hello, your Akan name is Yaw");
                break;
            case 5:
                alert("Hello, your Akan name is Kofi");
                break;
            case 6:
                alert("Hello, your Akan name is Kwame");
                break;
        }
    }

    else if(gender == "Female"){
        switch(d){
            case 0:
                alert("Hello, your Akan name is Akosua");
                break;
            case 1:
                alert("Hello, your Akan name is Adwoa");
                break;
            case 2:
                alert("Hello, your Akan name is Abenaa");
                break;
            case 3 :
                alert("Hello, your Akan name is Akua ");
                break;
            case 4:
                alert("Hello, your Akan name is Yaa");
                break;
            case 5:
                alert("Hello, your Akan name is Afua");
                break;
            case 6:
                alert("Hello, your Akan name is Ama");
                break;
        }   
    }

    else{
        alert("Hello, Kindly Enter valid Date of Birth and gender");
    }
}
   
}
}

