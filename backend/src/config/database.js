import { Sequelize } from 'sequelize'

class Database {
    constructor() {
        this.init()
    }

    init() {
        
        this.db = new Sequelize({
            database: 'agenda_zd0h',
            host: 'dpg-d4pmejuuk2gs73f87sj0-a',
            username: 'agenda_zd0h_user',
            password: '484PCwzqjHcJstD2JqWB228fuW57J2NA',
            dialect: 'postgres'
        })
    }
}

export default new Database()