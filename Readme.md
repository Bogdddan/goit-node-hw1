# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://drive.google.com/file/d/14iVoLqLDsc9qzvrAbWBKpYfoxqzFYPPw/view?usp=drivesdk

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
https://drive.google.com/file/d/14iI3xO2hS8Pz1nZSsf6bUVv7wKTuYZeG/view?usp=drivesdk

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
https://drive.google.com/file/d/156o8zwoI25P96_5y0K1OEXqDWaA-P4eu/view?usp=drivesdk

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
https://drive.google.com/file/d/14iI3xO2hS8Pz1nZSsf6bUVv7wKTuYZeG/view?usp=drivesdk