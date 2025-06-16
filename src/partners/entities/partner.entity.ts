const partners = [
  { id: 1, name: "Alpha Corp", term: "2023-2025", profit: 50000 },
  { id: 2, name: "Beta LLC", term: "2022-2024", profit: 75000 },
  { id: 3, name: "Gamma Inc", term: "2021-2023", profit: 60000 },
  { id: 4, name: "Delta Partners", term: "2023-2026", profit: 82000 },
  { id: 5, name: "Epsilon Ltd", term: "2022-2025", profit: 48000 },
  { id: 6, name: "Zeta Group", term: "2023-2024", profit: 55000 },
  { id: 7, name: "Eta Associates", term: "2021-2023", profit: 70000 },
  { id: 8, name: "Theta Enterprises", term: "2022-2026", profit: 93000 },
  { id: 9, name: "Iota Solutions", term: "2023-2025", profit: 67000 },
  { id: 10, name: "Kappa Co", term: "2024-2027", profit: 72000 }
];


export class Partner {
    find(){
        return partners
    }
    findById(id : number){
        return partners.find(item => item.id === id)
    }
    create(partner : { id : number, name : string, term : string, profit : number}){
        partners.push(partner)
        return partner
    }
    update( id : number, updateData : Partial<{ name : string, term : string, profit : number}>){
        const partner = partners.find(item => item .id === id)
        if(partner){
            Object.assign(partner, updateData)
            return partner
        }
        return null
    }
    delete( id : number){
        const partner = partners.findIndex(item => item.id === id)
        if( partner !== -1 ){
            partners.slice(partner, 1)[0]
            return 'Muvvaffaqiyatli tugallandi shartnoma'
        }
    }
}
