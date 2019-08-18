function chat() {
    let user = document.getElementById("userBox").value;
    document.getElementById("userBox").value = "";
    document.getElementById("chatLog").innerHTML += "Jij: " + user+"<br>";
    document.getElementById("chatLog").innerHTML += "Peerbot: <span id ='bot'>" + answerMachine(user)+"</span> <br>";

}

function answerMachine(question) {
    //The includes function is case-sensitive (and so is Peerbot herself)
    question = question.toLowerCase();

    if (question.includes("hoi") || question.includes("hey") || question.includes("hallo") || question.includes("hi")){
        return "Hallo, kan ik je ergens mee helpen?";
    }

    if (question.includes("ja")) {
        return "Stel je vraag maar";
    }

    if (question.includes("nee")){
        return "Ok, doei";
    }

    if ((question.includes("leven")) && (question.includes("universum")) && question.includes("alles")){
        return "42";
    }
    //document.getElementById("chatLog").innerHTML += "Peerbot: <span id = "bot"> </span> <br>";
    if (question.includes("waar") && question.includes("modulewijzer")) {
        return "De modulewijzer van ieder vak staat op LMS";
    }

    if (question.includes("waar") && question.includes("hogeschoolgids")){
        return "De hogeschoolgids staat <a href=https://hint.hr.nl/nl/Instituten/CMI/CMI-studenten-Thema-/Algemeen/Hogeschoolgids/>hier</a>."
    }

    if (question.includes("tentamen") && question.includes("wat")){
        return "Alle informatie over het tentamen staat in de modulewijzer.";
    }

    if (question.includes("tentamen") && question.includes("wanneer")){
        return"Als de datum en tijd van het tentamen bekend is staat dat in Osiris bij het tentamen, of in je rooster.";
    }

    if (question.includes("tentamen") && question.includes("waar")){
        return"Je vindt de locatie van het tentamen in osiris of in je rooster.";
    }

    if (question.includes("rooster") && question.includes("waar")){
        return "Het rooster staat <a href=https://rooster.cmgt.hr.nl>hier</a> ";
    }

    if (question.includes("building block")){
        return "Deze  vraag kun je waarschijnlijk beter aan een peercoach stellen";
    }

    if (question.includes("speedcourse")){
        return "Je kunt een speedcourse aanvragen bij de docent waar het vak over gaat";
    }

    if (question.includes("waar") && (question.includes("decaan") || question.includes("decanen"))){
        return "De decanen kun je vinden op Wijnhaven 66. Zij hebben iedere dag inloopspreekuur tussen 12.30 en 13.30";
    }

    else {
        return "Ik begrijp helaas je vraag niet. Kun je het aan een docent of een peercoach vragen?";
    }


}


