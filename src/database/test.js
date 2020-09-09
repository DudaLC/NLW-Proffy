const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    //inserir dados

    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "99999999",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: 1,
        cost: "20"
        //proffy id virá pelo banco de dados
    }

    classScheduleValue = [
        //class id virá pelo banco de dados
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 3,
            time_from: 270,
            time_to: 1000
        }
    ]
    
    ///await createProffy(db, {proffyValue, classValue, classScheduleValue})

    //consultar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor 
    //e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    //o horario que a pessoa trabalha é das 8h as 18h 
    // o horário do tim_from (8h) precisa ser antes ou igual ao horário solicitado 
    // e o time_te precisa ser maior
    const selectedClassSchedule = await db.all(`
        SELECT classes_schedule.*
        FROM classes_schedule
        WHERE classes_schedule.class_id = "1"
        AND classes_schedule.weekday = "3"
        AND classes_schedule.time_from <= "370"
        AND classes_schedule.time_to > "370"
    `)
    console.log(selectedClassSchedule)
})