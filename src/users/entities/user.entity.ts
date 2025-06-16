const users = [
  { id: 1, ismi: "Ali", yoshi: 25, kasbi: "Dasturchi" },
  { id: 2, ismi: "Laylo", yoshi: 28, kasbi: "Muhandis" },
  { id: 3, ismi: "Jasur", yoshi: 22, kasbi: "Grafik dizayner" },
  { id: 4, ismi: "Malika", yoshi: 30, kasbi: "Shifokor" },
  { id: 5, ismi: "Temur", yoshi: 35, kasbi: "O'qituvchi" },
  { id: 6, ismi: "Gulbahor", yoshi: 27, kasbi: "Jurnalist" },
  { id: 7, ismi: "Sanjar", yoshi: 29, kasbi: "Biznesmen" },
  { id: 8, ismi: "Aziza", yoshi: 24, kasbi: "Marketing mutaxassisi" },
  { id: 9, ismi: "Diyor", yoshi: 31, kasbi: "Yurist" },
  { id: 10, ismi: "Nilufar", yoshi: 26, kasbi: "Psixolog" }
];

export class User {
    find(){
        return users
    }
    findById(id : number){
        return users.find(item => item.id === id)
    }
    create(user: {id : number, ismi : string, yoshi : number, kasbi : string}){
        users.push(user)
        return user
    }
    update(id : number, updateData : Partial<{ ismi : string, yoshi : number, kasbi : string}>){
        const user = users.find(user => user.id === id)
        if(user){
            Object.assign(user, updateData)
            return user
        }
        return null
    }
    delete( id : number){
        const user = users.findIndex(user => user.id === id)
        if( user !== -1 ){
            users.splice(user, 1)[0];
            return 'Muvvaffaqiyatli tamomlandi'
        }
        return null
    }
}
