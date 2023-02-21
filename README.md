# git-config
# JS-6-03
# JS-6-04

## Действия после установки git

### посмотреть настройки

```shell
git config --list
```

```shell
git config --global user.name “имя”
git config --global user.email “почта”


git config --global core.safecrlf warn
git config --global core.quotepath off
git config --global init.defaultBranch main # Ветка по умолчанию
```

### windows

```shell
git config --global core.autocrlf true
```

### MAC & UNIX

```shell
git config --global core.autocrlf input
```

## Действия при инициализации нового репозитория и при работе с ним

### инициализация git репозитория

```shell
git init
```

### текущее состояние репозитория

```shell
git status
```

### добавить в трек (отслеживаемые) файл или папку

```shell
git add index.html
```

### добавить все файлы из корня в трек

```shell
#1 - "git add -A"
'git add -A'

This command stages:

All changes
In all directories
It is equivalent to git add --all.

#2 - "git add ."
'git add .'

This command stages:

All changes
In the current directory and its subdirectories (if a file has been changed outside the directory where you run the git commands, it will not be staged)

#3 - "git add -u"
'git add -u'

This command stages

All modifications and deletions (but no new files)
In all directories
It is equivalent to git add --update.

#4 - Stage All Files With A Specific Extension
'git add -A *.txt'

If you want to stage all files with a specific extension, for example .txt
```

### выполнить коммит (сделать слепок) текущего состояния проекта

```shell
git commit -m "сообщение"
```

```shell
git log --oneline  посмотреть историю коммитов

### показывает изменения
```shell
git diff
git diff --color-words // показывает по строкам изменения
```

## отменить коммит "ПЕРЕПИСЫВАЕТ ИСТОРИЮ"

### вернуться к коммиту старому но оставить текущие изменения

```shell
git reset 'HASH commit'
```

### вернуться к коммиту и удалить все изменения

```shell
git reset --hard 'HASH commit'
```

### откатить изменения у всех файлов трека

```shell
git checkout .  
git checkout name.file  // откатить изменения в одном файле или каталоге
```

### откатить изменения в одном файле или каталоге

```shell
git checkout name.file
```

### отправить изменения в удаленный репозиторий

```shell
git push 
```

### клонирование репозитория

```shell
git clone https://github.com/Quper87/git-lesson.git
```

### сохраняет изменения отслеживаемых файлов и выполняет коммит

```shell
git commit -a -m 'сохраняет изменения отслеживаемых файлов и выполняет коммит'
```
### проверить прикрепленный урл переприкрепить к другому репозиторию
The last one is used when you need to change the remote repository. Let’s say you copied a repo from someone else and want to change the remote repository from the original owner’s to your own GitHub account. Follow the same process as git remote add origin, except use set-url instead to change the remote repo.

```shell
git remote -v
git remote add origin <url>
git remote set-url origin <url>
```
