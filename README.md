<h1> Module </h1>
<p> Шаблон «модуль» получил широкое распространение благодаря предоставляемой им возможности структурировать и организовать программный код по мере увеличения его объема. </p>
<p> В отличие от других языков, в JavaScript отсутствует специальная синтаксическая конструкция для создания пакетов, но шаблон «модуль» обеспечивает все необходимое для создания независимых фрагментов программного кода, которые можно рассматривать как «черные ящики» и добавлять, заменять или удалять их из своей программы в соответствии с потребностями (возможно, изменяющимися с течением времени) вашей программы. </p>
<p> Шаблон «модуль», удобно использовать совместно с описанной ранее конструкцией создания пространства имен. </p>

<e> Можно показать другим способом, например поставив перед функцией оператор: </e>

<code>
+function() {
  alert('Вызов на месте');
}();
</code>
<code>
!function() {
  alert('Так тоже будет работать');
}();
</code>
<hr>
<h1> Singleton </h1>
<p> Одиночка (англ. Singleton) — порождающий шаблон проектирования, гарантирующий, что в однопроцессном приложении будет единственный экземпляр некоторого класса, и предоставляющий глобальную точку доступа к этому экземпляру. </p>

<p> У класса есть только один экземпляр, и он предоставляет к нему глобальную точку доступа. Существенно то, что можно пользоваться именно экземпляром класса, так как при этом во многих случаях становится доступной более широкая функциональность. Например, к описанным компонентам класса можно обращаться через интерфейс, если такая возможность поддерживается языком. </p>
<p> Глобальный «одинокий» объект — именно объект, а не набор процедур, не привязанных ни к какому объекту — бывает нужен: </p>
<ul>
    <li> Если используется существующая объектно-ориентированная библиотека; </li>
    <li> Если есть шансы, что один объект когда-нибудь превратится в несколько; </li>
    <li> Если интерфейс объекта (например, игрового мира) слишком сложен и не стоит засорять основное пространство имён большим количеством функций; </li>
    <li> Если, в зависимости от каких-нибудь условий и настроек, создаётся один из нескольких объектов. Например, в зависимости от того, ведётся лог или нет, создаётся или настоящий объект, пишущий в файл, или «заглушка», ничего не делающая. </li>
</ul>
<p> Такие объекты можно создавать и при инициализации программы. Это может приводить к следующим трудностям: </p>
<ul>
    <li> Если объект нужен уже при инициализации, он может быть затребован раньше, чем будет создан. </li>
    <li> Бывает, что объект нужен не всегда. В таком случае его создание можно пропустить. </li>
</ul>

