/* ДЗ 4 - работа с DOM */

/*
 Задание 1:

 1.1: Функция должна создать элемент с тегом DIV

 1.2: В созданный элемент необходимо поместить текст, переданный в параметр text

 Пример:
   createDivWithText('2up') // создаст элемент div, поместит в него '2up' и вернет созданный элемент
 */
function createDivWithText(text) {
  var div = document.createElement('div');
  div.innerText = text;
  return div;
}

/*
 Задание 2:

 Функция должна вставлять элемент, переданный в пераметре what в начало элемента, переданного в параметре where

 Пример:
   prepend(document.querySelector('#one'), document.querySelector('#two')) // добавит элемент переданный первым аргументом 
   в начало элемента переданного вторым аргументом
 */
function prepend(what, where) {
  where.insertBefore(what, where.firstChild);
}

/*
 Задание 3:

 3.1: Функция должна перебрать все дочерние элементы узла, переданного в параметре where

 3.2: Функция должна вернуть массив, состоящий из тех дочерних элементов следующим 
 соседом которых является элемент с тегом P

 Пример:
   Представим, что есть разметка:
   <body>
      <div></div>
      <p></p>
      <a></a>
      <span></span>
      <p></p>
   </dody>

   findAllPSiblings(document.body) // функция должна вернуть массив с элементами div и span т.к. 
   следующим соседом этих элементов является элемент с тегом P
 */

function findAllPSiblings(where) {
  var arr = [];
  for (var i = 0; i < where.children.length - 1; i++) {
      if (where.children[i].nextElementSibling.nodeName == 'P') {
          arr.push(where.children[i]);
      }
  }
  return arr;
}

/*
 Задание 4:

 Функция представленная ниже, перебирает все дочерние узлы типа "элемент" внутри 
 узла переданного в параметре where и возвращает массив из текстового содержимого 
 найденных элементов Но похоже, что в код функции закралась ошибка и она работает 
 не так, как описано.

 Необходимо найти и исправить ошибку в коде так, чтобы функция работала так, как описано выше.

 Пример:
   Представим, что есть разметка:
   <body>
      <div>привет</div>
      <div>2up</div>
   </dody>

   findError(document.body) // функция должна вернуть массив с элементами 'привет' и '2up'
 */
function findError(where) {
    var result = [];

    for (var child of where.childNodes) {
      // Всевозможные значения nodeType
      // const unsigned short ELEMENT_NODE = 1;  
      if(child.nodeType==1){
        result.push(child.innerText);
        }
    }
    return result;
}

/*
 Задание 5:

 Функция должна перебрать все дочерние узлы элемента переданного в параметре where и удалить из него все текстовые узлы

 Задачу необходимо решить без использования рекурсии, то есть можно не уходить вглубь дерева.
 Так же будьте внимательны при удалении узлов, т.к. можно получить неожиданное поведение при переборе узлов

 Пример:
   После выполнения функции, дерево <div></div>привет<p></p>loftchool!!!
   должно быть преобразовано в <div></div><p></p>
 */
function deleteTextNodes(where) {
  var childs = where.childNodes;
  var parent = where;
  for (var i = 0; i <  childs.length; i++) {
      if (childs[i].nodeType == 3) {
          parent.removeChild(childs[i]);
      }
  }
}

/*
 Задание 6:

 Выполнить предудыщее задание с использование рекурсии - то есть необходимо заходить внутрь 
 каждого дочернего элемента (углубляться в дерево)

 Пример:
   После выполнения функции, дерево <span> <div> <b>привет</b> </div> <p>loftchool</p> !!!</span>
   должно быть преобразовано в <span><div><b></b></div><p></p></span>
 */
function deleteTextNodesRecursive(where) {
  for (let i = 0; i < where.childNodes.length; i++) {
      let child = where.childNodes[i];
      if (child.nodeType == 1) {
        deleteTextNodesRecursive(child); 
      }
      else if (child.nodeType == 3) {
          where.removeChild(child);
          i--; 
      } 
  }
}


/*
 Задание 7 *:

 Необходимо собрать статистику по всем узлам внутри элемента переданного в параметре root и вернуть ее в виде объекта
 Статистика должна содержать:
 - количество текстовых узлов
 - количество элементов каждого класса
 - количество элементов каждого тега
 Для работы с классами рекомендуется использовать classList
 Постарайтесь не создавать глобальных переменных

 Пример:
   Для дерева <div class="some-class-1"><b>привет!</b> <b class="some-class-1 some-class-2">2up</b></div>
   должен быть возвращен такой объект:
   {
     tags: { DIV: 1, B: 2},
     classes: { "some-class-1": 2, "some-class-2": 1 },
     texts: 3
   }
 */


function collectDOMStat( root ) {
  // Создали словарь. Спасибо python, что показал мне структуры данных.
  let result = {
      tags: {},
      classes: {},
      texts: 0};
  
  parseNode(root);
  
  function parseNode(root) {
  // Перебираем каждый дочерний элемент root
    for (var child of root.childNodes) {
      // Блок проверки тэгов  
      if (child.nodeType == 1) {
        if (!result.tags[child.tagName]) {result.tags[child.tagName] = 1;}
        else {result.tags[child.tagName]++;}
        // Блок проверки классов у найденного тэга
        for (var childClass of child.classList) {
          if (!result.classes[childClass]) {result.classes[childClass] = 1;}
          else {result.classes[childClass]++;}
        }
      //Если это была текстовая нода 
      } 
      else if (child.nodeType === 3) {
            result.texts++;
      }
      // Если элемент оказался составным, то запускаемся внутри этого элемента
      if (child.childNodes.length > 0) {
            parseNode(child);
        }
      // Идем к следующему элементу root
    }
  }
  return result;
}


/*
 Задание 8 *:

 8.1: Функция должна отслеживать добавление и удаление элементов внутри элемента переданного в параметре where
 Как только в where добавляются или удаляются элементы,
 необходимо сообщать об этом при помощи вызова функции переданной в параметре fn

 8.2: При вызове fn необходимо передавать ей в качестве аргумента объект с двумя свойствами:
   - type: типа события (insert или remove)
   - nodes: массив из удаленных или добавленных элементов (в зависимости от события)

 8.3: Отслеживание должно работать вне зависимости от глубины создаваемых/удаляемых элементов

 Рекомендуется использовать MutationObserver

 Пример:
   Если в where или в одного из его детей добавляется элемент div
   то fn должна быть вызвана с аргументом:
   {
     type: 'insert',
     nodes: [div]
   }

   ------

   Если из where или из одного из его детей удаляется элемент div
   то fn должна быть вызвана с аргументом:
   {
     type: 'remove',
     nodes: [div]
   }
 */
function observeChildNodes( where, fn ) {
  // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
  // Создали наблюдателя
  var observer = new MutationObserver(callback);

  // Задали параметры наблюдателя
  var config = {attributes: true, childList: true, subtree: true };

  // Запустили наблюдение
  observer.observe(where, config);

  // Что вызывает Observer
  function callback(mutationsList, observer) {
    for(var mutation of mutationsList) {
      if (mutation.type == 'childList') {
              // Если ноды добавились
              if (mutation.addedNodes.length) {
                  fn({type: 'insert', nodes: [...mutation.addedNodes]});
              }
              // Если ноды убавились
              if (mutation.removedNodes.length) {
                  fn({type: 'remove', nodes: [...mutation.removedNodes]});
              }
      };
        // else if (mutation.type == 'attributes') {
        //     console.log('The ' + mutation.attributeName + ' attribute was modified.');
        // }
    }
  };
}

export {
    createDivWithText,
    prepend,
    findAllPSiblings,
    findError,
    deleteTextNodes,
    deleteTextNodesRecursive,
    collectDOMStat,
    observeChildNodes
};
