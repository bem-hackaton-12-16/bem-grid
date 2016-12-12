# BEM Grid [![tag](https://img.shields.io/github/tag/bem-hackaton-12-16/bem-grid.svg?style=flat-square)](https://github.com/bem-hackaton-12-16/bem-grid/tags)

Модульная сетка, для проектов, использующих [BEM](https://ru.bem.info), [PostCSS](http://postcss.org) и [Lost Grid](https://github.com/peterramsing/lost).
Фактически, форк проекта [Sharps](https://github.com/theprotein/sharps).

## Зачем
В Sharp не устраивало то, что дефолтные данные по сетке нужно устанавливать в конфиге. Нужно было это сделать в каком-нибудь блоке, который бы шел в npm модуле автоматом.
Так же хотелось изменять конфиг в блоке. То есть для блока `some-block`, на уровне `touch.blocks`, мы бы могли установить не 12 колоночную сетку, а, например, 6 колоночную.

### Запуск проекта
```bash
$ ./node_modules/.bin/enb make
$ npm start
```

### TODO
1. Сделать переопределение по уровням
2. Добавить Gemini тесты
3. Создать npm модуль
