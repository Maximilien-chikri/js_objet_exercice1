// 1
let perso = {
    nom : "Chikri",
    prenom : "Maximilien",
    age : 27,
    taille : "inconnu",
}
console.log(perso);
console.log(perso.age);
// 2
let second = {
    nom : "du nom",
    prenom : "second",
    age : 24,
    taille : "1 m 78",
}
let third = {

}
// 3
third.nom = perso.nom
third.age = second.age
third.taille = "185 cm"

console.log(third);

// 4

let fourth = {
    saluer(){
        console.log(`bonjour ${second.prenom}`);
    }
}
fourth.saluer()

// 5
let fifth = {
    nom : "godaime",
    prenom : "hokage",
    bonjour(){
        console.log(`Bonjour,je m'appelle ${this.nom} ${this.prenom}`);
    }
}
fifth.bonjour()

// 6
let sixth = {
    nom = "roku"
    changeAge(){
        this.age = prompt('donne moi ton âge?')
        console.log(`${this.nom} à ${this.age} ans`);
    }
}
sixth.changeAge()

// 7
let perso1 = {
    nom : "perso1",
    age : 23,
}
let perso2 = {
    nom : "perso2",
    age : 24,
}
let perso3 = {
    nom : "perso3",
    age : 25,
}

let voleur = {
    usurpation() {
        this.nom = x.nom
        this.age = x.age
    }
}

voleur.usurpation(perso);
console.log(voleur);

// 8
let françois = {
    nom : "françois",
    panier : ["pain"],
    derober(){
        for (let i = 0; i < 2; i++){
            let product = prompt("que voullez vous derober ? \n" ${sergio.panier})
            this.panier.push(product)
            a.panier.splice(sergio.panier.indexOf(product),1)
        }
    }
}

let sergio = {
    nom : "sergio",
    panier : ["jambon", "ail", "baguette", "kiwi"]
}