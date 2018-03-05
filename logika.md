###### Relacje

Własności relacji R^2 ⊂ X = X × X :
– zwrotna ∀ x ∈ X  x , x ∈ R
– przeciw zwrotna ∀ x∈ X  x , x ∉ R
– symetryczna ∀ x , y∈ X  x , y∈ R⇒ y , x∈ R
– antysymetryczna ∀ x , y∈ X  x , y∈R⇒ y , x∉R
– słabo antysymetryczna ∀ x , y∈ X  x , y∈ R∧ y , x ∈ R⇒ x= y
– przechodnia ∀ x , y , z ∈ X  x , y ∈R∧ y , z ∈ R⇒  x , z ∈R
– spójna ∀ x , y∈ X  x , y∈R∨ y , x ∈R∨ x= y

Relacja równoważności == zwrotna, symetryczna i przechodnia

Niech R będzie relacją równoważności określoną w zbiorze X ≠∅ .
Klasą abstrakcji elementu x ∈ X względem relacji R nazywamy zbiór [ x ] R ={y ∈ X : x R y}

Zbiór ilorazowy to zbiór wszystkich klas abstrakcji względem relacji równoważności:
X / R={[ x ] R : x∈ X }

###### Funkcje
Funkcje: każdemu X przypisujemy dokładnie jeden Y.
Różnowartościowa(injekcja): dla różnych X muszą być różne Y.
Na(suriekcja): każdy element ze zbioru Y ma odpowiadający mu X.
Bijekcja: różnowartościowa i na.


###### Rekurencja
- funkcja zerowa
- funkcja nastepnika
- funkcja rzutowania
- złożenie funkcji
- rekurencja prosta
- operator minimalizacji
- minimum efektywne?

* pierwotnie rekurencyjna otrzymywana z f. prostych z skonczona liczba operacji zlozenia i rekursji prostej
* czesciowo rekurencyjna - j.w. + minimum efektywne
* ogólna rekurencja (całkowita funkcja rekurencyjna) - pierwotnie rekurencyjne są ogólnie, ale już nie w drugą stronę

Klasa funkcji elementarnie rekurencyjnych to najmniejsza klasa funkcji
zawierająca funkcje:
- odejmowania
- funkcję wykładniczą,
- funkcję następnika,
oraz zamknięta ze względu na operacje:
- złożenia,
- minimum ograniczonego.