function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var skillsValue = skills.options[skills.selectedIndex].value;
    var skillsText = skills.options[skills.selectedIndex].text;
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
    var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;

    if (memberValue == "member") {
        if (skillsValue == "skills") {
            if (skillsMemberValue == "skillsMember") {
                alert("Please select a member, a skill and a skill level");
            } else {
                alert("Please select a member and a skill");
            }
        } else {
            if (skillsMemberValue == "skillsMember") {
                alert("Please select a member and a skill level");
            } else {
                alert("Please select a member");
            }
        }
    } else {
        if (skillsValue == "skills") {
            if (skillsMemberValue == "skillsMember") {
                alert("Please select a skill and a skill level");
            } else {
                alert("Please select a skill");
            }
        } else {
            if (skillsMemberValue == "skillsMember") {
                alert("Please select a skill level");
            } else {
                alert("Please select a member");
            }
        }
    }
}