+++
title = "{{ replace .Name "-" " " | title }}"
description = 'Eine Auflistung aller Beiträge in der Kategorie: "{{ replace .Name "-" " " | title }}"'
keywords = ['Kategorie', '{{ replace .Name "-" " " | title }}']
date = {{ .Date }}
draft = false
aside = true
+++