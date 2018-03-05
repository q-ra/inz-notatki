### Hierarchia Chomsky’ego gramatyk.

###### Języki regularne (typu 3)
- można wygenerować za pomocą gramatyki liniowej
– takiej, która po lewej stronie reguł ma pojedyncze nieterminale,
po prawej zaś słowa zawierające co najwyżej jeden nieterminal

Gramatyki liniowe są równoważne automatom skończonym.
A -> a
A -> e
A -> Ba

###### Języki bezkontekstowe (typu 2)
- wygenerować za pomocą gramatyki bezkontekstowej,
- która po lewej stronie reguł ma pojedyncze nieterminale, po prawej zaś dowolne słowa

Gramatyki bezkontekstowe są równoważne niedeterministycznym automatom ze stosem.
A -> Ac
A -> AB

###### Języki kontekstowe (typu 1)
- wygenerować za pomocą gramatyki kontekstowej

AB -> Ca
B -> b
ABcd ->abCd
NIE MOZNA: A -> e ale mozna S -> e

Gramatyki kontekstowe są równoważne automatom liniowo ograniczonym.

###### Języki rekurencyjnie przeliczalne (typu 0)
- język, dla którego istnieje gramatyka typu 0, której produkcje są postaci alfa -> beta , gdzie α i β są dowolnymi słowami.

Gramatyki typu 0 są równoważne maszynom Turinga.
inna definicja Rekurencyjnie przeliczalny podzbiór zbioru wszystkich słów nad danym alfabetem.