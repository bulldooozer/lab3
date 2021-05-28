
	var trigger=0, name, age, sex, Sky, education, mathematic, nlo, Ofilme, programming, bread; // обьявляем переменные которые понадобятся в ходе работы
		document.getElementById("startTest").addEventListener("click",test) // добавляем слушателя события click к элементу с id startTest
		function test(){ // Функция которая опрашивает пользователя
			document.getElementById("startTest").style = "display: none";
			do {
				name = prompt("Введите Ваше имя");
			} while (!(/^([a-zA-Zа-яёА-ЯЁ])/.test(name)));
			do {
				age = parseInt(prompt("Введите Ваш возраст"));
			} while (!(/\d/.test(age)));
			do {
				sex = prompt("Укажите Ваш пол");
			} while (!(/^([М]+|)$/.test(sex) || /^([Ж]+|)$/.test(sex)));
			do {
				Sky = prompt("Ваше любимое число")
			} while (!(/\d/.test(Sky)));

			education = confirm("Имеется ли у вас высшее образование?");
			mathematic = confirm("Имеется ли у Вас опыт работы?");
			nlo = confirm("Имеются ли у Вас знания в области ядерной физики?");
			Ofilme = confirm("Проходили ли Вы практику или стажировку в данной сфере?");
			programming = confirm("Вы обладаете таким качеством, как стрессоустойчивость?");
			bread = confirm("Готовы ли Вы по необходимости работать в ночные смены?");

			document.getElementById("education").setAttribute('disabled', 'disabled');
			document.getElementById("mathematic").setAttribute('disabled', 'disabled');
			document.getElementById("nlo").setAttribute('disabled', 'disabled');
			document.getElementById("Ofilme").setAttribute('disabled', 'disabled');
			document.getElementById("programming").setAttribute('disabled', 'disabled');
			document.getElementById("bread").setAttribute('disabled', 'disabled');
			writeToPage();
		}
		function writeToPage(){ // функция которая записывает значение из наших переменных в элементы на странице
			/*
			document.getElementById("name") - возвращает элемент с id name
			document.getElementById("name").innerText - текст этого элемента
			У ЧЕКБОКСОВ НЕТ ТЕКСТА, поэтому мы пишем в свойство checked значения true или false
			document.getElementById("education").checked = education;
			*/
			$("#name").val(name)
			$("#age").val(age)
			$("#sex").val(sex)
			$("#Sky").val(Sky)
			$("#sex").focus();
			$("#age").focus();
			$("#name").focus();
			$("#Sky").focus();
			document.getElementById("education").checked = education;
			document.getElementById("mathematic").checked = mathematic;
			document.getElementById("nlo").checked = nlo;
			document.getElementById("Ofilme").checked = Ofilme;
			document.getElementById("programming").checked = programming;
			document.getElementById("bread").checked = bread;
			trigger=1;
			myFunction();
		}
		x.style.display = "none";
		function myFunction() { 
	    	var x = document.getElementById("div1");
		if (trigger==1) {
		if (document.getElementById("mathematic").checked ==true && document.getElementById("programming").checked ==true)
		{
       		var text ='<p class="stroke">Ждем Вас на собеседовании</p>'
		x.innerHTML = text;
		x.style.display = "block";
		}
		else {
        	var text ='<p class="stroke">Мы Вам перезвоним</p>'
		x.innerHTML = text;
		}
		}
		}
