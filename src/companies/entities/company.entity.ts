const companies = [
    { id: 1, name: "TechnoSoft", headcount: 120, about: "Dasturiy ta'minot ishlab chiqaruvchi kompaniya" },
    { id: 2, name: "GreenFoods", headcount: 85, about: "Ekologik toza oziq-ovqat ishlab chiqaradi" },
    { id: 3, name: "AutoMax", headcount: 200, about: "Avtomobil ehtiyot qismlari ishlab chiqaradi" },
    { id: 4, name: "EduZone", headcount: 60, about: "Online ta'lim platformasi" },
    { id: 5, name: "MediLife", headcount: 150, about: "Tibbiy xizmatlar va asboblar yetkazib beruvchi" },
    { id: 6, name: "BuildPro", headcount: 100, about: "Qurilish texnologiyalari kompaniyasi" },
    { id: 7, name: "FinGo", headcount: 70, about: "Moliyaviy texnologiyalar bo‘yicha startap" },
    { id: 8, name: "DesignHub", headcount: 40, about: "Grafik va UI/UX dizayn studiyasi" },
    { id: 9, name: "LogiTrack", headcount: 130, about: "Logistika va yetkazib berish xizmatlari" },
    { id: 10, name: "Solaris", headcount: 90, about: "Quyosh energiyasi texnologiyalari kompaniyasi" }
];


export class Company {
    find(){
        return companies
    }
    findById(id : number){
        return companies.find(item => item.id === id);
    }
    create(company : { id :number, name : string, headcount : number, about : string} ){
        companies.push(company)
        return company
    }
    update( id: number, updateData : Partial<{ name : string, headcount : number, about : string}>){
        const company = companies.find(item => item.id === id)
        if(company){
            Object.assign(company, updateData)
            return company
        }
        return null
    }
    delete( id : number){
        const index = companies.findIndex(item => item.id === id)
        if(index !== -1){
            return companies.slice(index, 1)[0], "Company is closed"
        }
        return null
    }
}
