// Returns a random DNA base
const returnRandBase = () => {
    // defines an array of possible DNA bases
    const dnaBases = ['A', 'T', 'C', 'G']
    // returns a random base from the array
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    // creates an empty array to hold the DNA bases
    const newStrand = []
    // loop 15 times to generate 15 random bases and add them to the empty array
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    // returns the completed array of bases
    return newStrand
  }
  
  const pAequorFactory = 
  // creats and returns an object with properties specimenNum and dna
  (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
  // creates a method that randomly changes one of the DNA bases.
      mutate() {
  // choose a random index in the DNA array.
      let randDnaIndex = Math.floor(Math.random() * this.dna.length);
  // choose a new random DNA base to replace the current one
      let randBase = returnRandBase();
  // makes sure the new base is not the same as the current one
        while (randBase === this.dna[randDnaIndex]) {
          randBase = returnRandBase();
        }
  //once it has a new base it assign the new dna and return the dna value!
        this.dna[randDnaIndex] = randBase;
        return this.dna;
      },
    /*this creates a function that compares the DNA of 2 species.
    it first creates the function name compareDNA with a parameter of pAequor, underneath is a variable that is set to zero.
    this variable will increment for every index that is shared between two specimens!
    a for loop is used to iterate through the .dna index' of both specimens and when one matches the dnaComparison is incremented. */
      compareDNA(pAequor) {
        let dnaComparison = 0;
        for (let i = 0; i < this.dna.length; i++) {
            if(this.dna[i] === pAequor.dna[i]) {
                dnaComparison ++;
            }
        }
        /* this creates a variable that will show the percentage shared of two specimens, this takes the dnaComparison amount, divides it by the length
        of the DNA string multiplied by 100
        */
        let DNApercent = ((dnaComparison / this.dna.length) * 100);
        console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${DNApercent} in common`);
      },


      /* this function will see how likely to survive a specimen is!
      first, it creates a variable cgOccurance that is initially set to zero (this will increase everytime the C or G strang of DNA is found in the specimen)
      next is a for loop that iterates through the .dna property, checking if .dna is either equal to C or G.
      if it has an occurance then the cgOccurance will increment!
      */
      willLikelySurvive() {
        let cgOccurance = 0;
        for (let i = 0; i < this.dna.length; i++) {
            if(this.dna[i] === 'C' || this.dna[i] === 'G') {
                cgOccurance ++;
            }
        }
        /* this creates a variable that will find the percentage of the C and G strands in the DNA. it does this by divding cgOccurance by the length of DNA
        and multiplying by 100!
        if the percentage isequal or more than 60, it will return true, if it is lower it will return false! */
        let cgPercentage = ((cgOccurance / this.dna.length) * 100);
        if (cgPercentage >= 60) {
            return true
            } else {
                return false
            }
        }
      }
    };
  /* The below code creates an instance of pAequor1 with a selected DNA Base, it then tests the mutate function by showing
   the DNA before and after the mutate function is called!   */
   const pAequor1 = pAequorFactory(1, ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C']);
   const pAequor2 = pAequorFactory(2, ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'C', 'T', 'A', 'G', 'T', 'A', 'C']);
   const pAequor3 = pAequorFactory(1, ['C', 'G', 'C', 'G', 'C', 'C', 'A', 'A', 'C', 'A']);
console.log(pAequor1.dna);
pAequor1.mutate();
console.log(pAequor1.dna);
pAequor1.compareDNA(pAequor2);
console.log(pAequor3.willLikelySurvive());


/*the below code starts of by creating an empty array (survivingSpecimens) and a variable specimenNumber that equals 0.
it then creates a while loop with the condition of specimenNumber <=30 (this will loop until the specimen number is 30).
with each iteration it will create a specimen with the prebuilt factory function pAequorFactory, with the parameters specimenNumber and mockUpStrand()
mockUpStrand is a prebuilt function that will create a mock stand of DNA! if the DNA passes the function (willLikelySurvive) then it is pushed onto the
survivingSpecimens array and the specimenNumber will increment by 1! */
const survivingSpecimens = [];
let specimenNumber = 0;
while (specimenNumber <=30) {
  let newSpecimen = pAequorFactory(specimenNumber, mockUpStrand());
  if (newSpecimen.willLikelySurvive()) {
    survivingSpecimens.push(newSpecimen);
    specimenNumber ++;
  }
}
console.log(survivingSpecimens)