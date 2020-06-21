import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("bullet.db")

export const init = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("DROP TABLE events"),
            tx.executeSql("CREATE TABLE IF NOT EXISTS events ("+
                "id INTEGER PRIMARY KEY, "+
                "title TEXT NOT NULL, "+
                "description TEXT NOT NULL, "+
                "start TEXT NOT NULL, "+
                "end TEXT NOT NULL, "+
                "repeatType INTEGER NOT NULL, "+
                "allDayRepeat INTEGER NOT NULL, "+
                "lat REAL, "+
                "lng REAL, "+
                "color TEXT NOT NULL, " +
                "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"+
                // "updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"+
                ")", 
                [], 
                ()=> {
                    resolve()
                },
                (_, err):any => { 
                    reject(err)
                })
        })  
    })

    return promise
}

export interface IEventData {
    title: string;
    description: string;
    start: string;
    end: string;
    color: string;
    lat: null | number;
    lng: null | number;
    repeatType: any;
    allDayRepeat: boolean;
}
export const insertEvent = (insertData: IEventData) => {
    console.log("insertData", insertData)
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO events ("+
                "title, description, start, end, color," +
                " lat, lng, repeatType, allDayRepeat"
            +") " +
            "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",

                [
                    insertData.title,
                    insertData.description,
                    insertData.start,
                    insertData.end,
                    insertData.color,
                    insertData.lat,
                    insertData.lng,
                    insertData.repeatType,
                    insertData.allDayRepeat
                ], 
                (_, result)=> {
                    console.log(result)
                    resolve(result)
                },
                (_, err):any => { 
                    console.log(err)
                    reject(err)
                })
        })  
    })

    return promise
}

export const getEvents = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM events",

                [], 
                (_, result)=> {
                    console.log(result)
                    resolve(result)
                },
                (_, err):any => { 
                    console.log(err)
                    reject(err)
                })
        })  
    })

    return promise
}