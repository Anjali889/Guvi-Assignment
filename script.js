// 1. For the given JSON iterate over all for loops (for, for in, for of, forEach)

var obj = [
    { person: "Anjali", age: "21", company: "cognizant" },
    { person: "Shivani", age: "29", company: "infosis" },
    { person: "sheetal", age: "28", company: "tata" },
  ];

for(let i = 0; i <obj.length; i++) {
    console.log(obj[i]);
}
//output
//object { person: "Anjali", age: "21", company: "cognizant" },
//object { person: "Shivani", age: "29", company: "infosis" },
//object { person: "Shivani", age: "29", company: "infosis" },

for(var info in obj) {
    console.log(obj[info]);
}
//output
//object { person: "Anjali", age: "21", company: "cognizant" },
//object { person: "Shivani", age: "29", company: "infosis" },
//object { person: "Shivani", age: "29", company: "infosis" },

for(const elem of obj) {
    console.log(elem);
}
//output
//object { person: "Anjali", age: "21", company: "cognizant" },
//object { person: "Shivani", age: "29", company: "infosis" },
//object { person: "Shivani", age: "29", company: "infosis" },
Object.values(obj).forEach(value => {
    console.log(value);
})

//output
//object { person: "Anjali", age: "21", company: "cognizant" },
//object { person: "Shivani", age: "29", company: "infosis" },
//object { person: "Shivani", age: "29", company: "infosis" },

// 2. Create your own resume data in JSON format

var resume = { 
    "basic details": {
        "name": "Anjali Patil",
        "email": "anju.patil.883@gmail.com",
        "phone": "94012345",
        "location": {
          "address": "Pune,Hadapsar",
          "City": "Pune",
          "State": "Maharashtra",
          "Pincode": "411989"
        },
        
      },
      "Education Details": {
        "Class X": [
          {
            "School": "New English School",
            "Percentage": "82%",
            
          }
        ],
        "Class XII": [
          {
            "School": "Cygnet Public jr college",
            "Percentage": "53%",
            
          }
        ],
        "Under Graduation": [
          {
            "College Name": "Institute of technology",
            "University": "MSBTE",
            "Department": "Computer Engineering",
            "Percentage": "78%",
            
          }
        ],
        
      },
      "Skills": [
        {
          "1": "Hardware",
          "2": "Networking",
          "3": "Aiml",
          
        }
      ],
      "Languages": [
        {
          "1": "English",
          "2": "Marathi",
          "3": "Hindi",
          "4": "German",
          
        }
      ],
      "Personal Interests": [
        {
          "1": "Music",
          "2": "Dance",
          "3": "Technology",
          
        }
      ]
    }
  ©
