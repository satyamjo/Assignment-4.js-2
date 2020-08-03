class patient {
    constructor(pName, pAge, pGender, pIpNumber, pNumdays) {
        this.name = pName;
        this.age = pAge;
        this.gender = pGender;
        this.ipNumber = pIpNumber;
        this.NumDays = pNumdays;
    }
}

var pdetail = new patient("ram", 52, "male", 201, 11);
document.getElementById("demo").innerHTML = ("Patient Name = " + pdetail.name);
document.getElementById("demo1").innerHTML = ("Patient Age = " + pdetail.age);
document.getElementById("demo2").innerHTML = ("Patient Gender = " + pdetail.gender);
document.getElementById("demo3").innerHTML = ("Patient IP-Number = " + pdetail.ipNumber);
document.getElementById("demo4").innerHTML = ("Patient Numbers Of Days = " + pdetail.NumDays);

// general

class general extends patient {
    constructor(pRentPerDay, pDocFees, pName, pAge, pGender, pIpNumber, pNumdays) {
        super(pName, pAge, pGender, pIpNumber, pNumdays);
        this.rentPerDay = pRentPerDay;
        this.docFees = pDocFees;
    }
}

var pGeneralDetails = new general(450, 250, "rekha", 23, "female", 205, 6);
document.getElementById("general-1").innerHTML = ("Patient Name = " + pGeneralDetails.name);
document.getElementById("general-2").innerHTML = ("Patient Age = " + pGeneralDetails.age);
document.getElementById("general-3").innerHTML = ("Patient Gender = " + pGeneralDetails.gender);
document.getElementById("general-4").innerHTML = ("Patient IP-Number = " + pGeneralDetails.ipNumber);
document.getElementById("general-5").innerHTML = ("Patient Numbers Of Days = " + pGeneralDetails.NumDays);
document.getElementById("general-6").innerHTML = ("Patient rent per Day = " + pGeneralDetails.rentPerDay);
document.getElementById("general-7").innerHTML = ("Patient fees per Day = " + pGeneralDetails.docFees);

// special 

class special extends patient {
    constructor(spRentPerDay, spRoomNumber, spEbill, spDocFees, pName, pAge, pGender, pIpNumber, pNumdays) {
        super(pName, pAge, pGender, pIpNumber, pNumdays);
        this.sRentPerDay = spRentPerDay;
        this.sRoomNumber = spRoomNumber;
        this.sEbill = spEbill;
        this.sDocFees = spDocFees;
    }
}
var pSpecialDetails = new special(1200, 3, 150, 450, "smita", 28, "female", 301, 4);
document.getElementById("sgeneral-1").innerHTML = ("Patient Name = " + pSpecialDetails.name);
document.getElementById("sgeneral-2").innerHTML = ("Patient Age = " + pSpecialDetails.age);
document.getElementById("sgeneral-3").innerHTML = ("Patient Gender = " + pSpecialDetails.gender);
document.getElementById("sgeneral-4").innerHTML = ("Patient IP-Number = " + pSpecialDetails.ipNumber);
document.getElementById("sgeneral-5").innerHTML = ("Patient Numbers Of Days = " + pSpecialDetails.NumDays);
document.getElementById("sgeneral-6").innerHTML = ("Patient rent per Day = " + pSpecialDetails.sRentPerDay);
document.getElementById("sgeneral-7").innerHTML = ("Patient fees per Day = " + pSpecialDetails.sRoomNumber);
document.getElementById("sgeneral-8").innerHTML = ("Patient fees per Day = " + pSpecialDetails.sEbill);
document.getElementById("sgeneral-9").innerHTML = ("Patient fees per Day = " + pSpecialDetails.sDocFees);

// out patient

class outPatient {
    constructor(pOpNumber, pDoctorId, pFess, pOpName, pOpAge, pOpGender) {
        this.opName = pOpName;
        this.opAge = pOpAge;
        this.opGender = pOpGender;
        this.opNumber = pOpNumber;
        this.doctorId = pDoctorId;
        this.fees = pFess;
    }
}

var pOutDetail = new outPatient(110, 221, 4250, "Suresh", 25, "male");
document.getElementById("out").innerHTML = ("Patient Name = " + pOutDetail.opName);
document.getElementById("out1").innerHTML = ("Patient Age = " + pOutDetail.opAge);
document.getElementById("out2").innerHTML = ("Patient Gender = " + pOutDetail.opGender);
document.getElementById("out3").innerHTML = ("Patient Op-Number = " + pOutDetail.opNumber);
document.getElementById("out4").innerHTML = ("Patient Doc. Id = " + pOutDetail.doctorId);
document.getElementById("out5").innerHTML = ("Patient Fees = " + pOutDetail.fees);