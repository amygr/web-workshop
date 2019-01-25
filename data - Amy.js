var students = [
    {id: '0', name: "John", score: 90 }, 
    {id: '1', name: "Larry", score: 60 }, 
    {id: '2', name: "Joseph", score: 50 }, 
    {id: '3', name: "Karla", score: 40 },
];


var students1 = new Array("Joseph", "John", "Larry")

//document.writeln(students.length);
document.write("<pre class= 'alert alert-secondary'>");
document.write(JSON.stringify(students));
document.write("</pre>");





function loadData(){

    var i = 0;
    let dataList = document.getElementById("dataList");

    while (i < students.length){

        var listItem = document.createElement("li");
        
        console.log(students[i]);
        listItem.innerText = students[i].name;


        dataList.appendChild(listItem);

        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;
    }
}

function calculateAverage(){

    average = 0;

    students.forEach(student => {
        average = average + student.score
    });

    average = average / students.length;

    return average;

}


function average(){

    average = 0;
    let scores = document.getElementById("score");

   /* students.forEach(student => {
        average = average + student.score
    });
    
    average = average / students.length;
    */
    scores.innerText = calculateAverage();
    scores.classList.add("badge");
    scores.classList.add("badge-pill");
    scores.classList.add("badge-secondary");



}


function fillTable(){

    var table = document.getElementById("grid");
    
    students.forEach(student => {


        var row = document.createElement('div');
        //row.classList.add("row");
        row.className = "row";

        var col = document.createElement('div');
        var col2 = document.createElement('div');
        var col3 = document.createElement('div');
        

        col.className = "col-sm"
        col2.className = "col-sm"
        col3.className = "col-sm"

        table.append(row);
        row.appendChild(col);
        col.innerText = student.id;
        row.appendChild(col2);
        col2.innerText = student.name;
        row.appendChild(col3);
        col3.innerText = student.score;

        if(student.score < 60){
            col3.classList.add("badge");
            col3.classList.add("badge-pill");
            col3.classList.add("badge-danger");
        }
        
        /*
        students.forEach(student =>{

            row.appendChild(col);
            row.innerText = student.name;


        });*/
        
        

    });
}
