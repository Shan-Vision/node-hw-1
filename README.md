
![Logo](https://is5-ssl.mzstatic.com/image/thumb/Purple60/v4/b6/aa/d9/b6aad99b-a5ab-bbb3-2f35-b2f5f4b5a602/pr_source.png/1200x630wa.png)


# Contacts Manager CLI (based on Node.js)

Small descriptions about usefull commands that helps you to create and manage your contacts by using terminal


## List of contatcs

To get all your contatcs you need to run

```bash
  node index.js --a list
```

Here comes an example - [Screenshot](https://monosnap.com/file/glY3qMkyBFrCHDo7nvldxtTEUsWgV0)


## Adding a contact

To add a new contact you need to run

```bash
  node index.js -a add -n Sarah -e sarah@gmail.com -p 070-321-73-59
```
Here comes an example - [Screenshot](https://monosnap.com/file/qI1YdJKoUf8sXeb5ErPgQ7FrJmrxl4)

## Remove a contact

```bash
node index.js -a remove -i 4
```

Here comes an example - [Screenshot](https://monosnap.com/file/WuvEwNbn5YfbWhTDfHMVhZhJlgdp1l)


## Get a contact by ID

```bash
node index.js -a get -i 10
```

Here comes an example - [Screenshot](https://monosnap.com/file/XXNGgg1bWRJP4owHvBqMsj6ypPjcKz)
