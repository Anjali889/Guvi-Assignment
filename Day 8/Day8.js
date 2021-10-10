/*The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”*/



class Movie{
    
    constructor(title,studio,rating="PG"){
       
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        
    }
    


    getPG(AM){
        
     console.log(AM.filter(m => m.rating==="PG") );
        //console.log(AM);

    }
 }


 All_Movies=[];
 All_Movies.push(new Movie("Casino Royal", "Eon Productions", "PG­13") );
 All_Movies.push(new Movie("Inception", "Legendary Pictures", "PG­16" ) );
 All_Movies.push(new Movie("Ready", "Boss",  ));
 All_Movies.push(new Movie("The Dark Knight", "Money hesist", "PG" ));

 All_Movies[0].getPG(All_Movies) ;
