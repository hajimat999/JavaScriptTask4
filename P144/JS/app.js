var rihanna = {
    name: 'Rihanna',
    surname:'Robyn',
    bornYear: 1988,
    birthPlace: 'USA',    
}

var beyonce = {
    name: 'Beyonce',
    surname: 'Giselle Knowles-Carter',
    bornYear: 1981,
    birthPlace: 'USA'
}

var general = {
    fullName: function(){
        return "FullName: "+ this.name + " " + this.surname
    },
    age: function(){
        var date = new Date().getFullYear()
        return "Born Year "+ (date - this.bornYear)
    },
    citizen: function(){
        return "Citizen: USA"
    },
    gender: function(){
        return 'Gender: Female'
    },
    skinColor: function(){
        return "Skin Color: dark-skinned"
    },
    grammys: function(count){
        return "count: "+ count
    },
    networth: function(moneyCount){
        return "Networth "+ moneyCount + " Million Dollars"
    },
    children: function(count){
        return "Children " + count
    }
}

console.log(general.fullName.call(beyonce))
console.log(general.age.call(beyonce))
console.log(general.citizen.call(beyonce))
console.log(general.gender.call(beyonce))
console.log(general.skinColor.call(beyonce))
console.log(general.grammys.call(beyonce, 28))
console.log(general.networth.call(beyonce, 500))
console.log(general.children.apply(beyonce, [3]))


class Employee{
    setEmployeeInformation(name, surname, age, birthPlace,salary,id,phoneNumber, practice){
        
        this.name =name;
        this.surname =surname;
        if(age > 40){
            console.log("You are too old")
            this.age = age
        }
        else{
            console.log('We Are Agree with Your Age')
            this.age = age;
        }
        this.birthPlace =birthPlace;
        this.salary =salary;
        this.id =id;
        this.phoneNumber =phoneNumber;
        if(practice < 5){
            console.log("I am so sorry")
            this.practice = practice
        }
        else{
            console.log('We Are Agree with Your Practice')
            this.practice = practice;
        }
    }
    getEmployeeFullName(){
        return "FullName: " + this.name + " " + this.surname
    }
    getEmployeeId(){
        return "ID: "+ this.id
    }
    getEmployeePhoneNumber(){
        return "Phone Number: "+this.phoneNumber
    }
    getEmployeeAge(){
        return "Age: " + this.age
    }
}
var employee1 = new Employee()
employee1.setEmployeeInformation('Ilkin', 'Rzayev', 89, 'Baku', 30000, 9999, '0705781926', 8)
console.log(employee1.getEmployeePhoneNumber())
console.log(employee1.getEmployeeAge())

