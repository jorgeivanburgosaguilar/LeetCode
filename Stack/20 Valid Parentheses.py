class Solution:
    def isValid(self, s: str) -> bool:
        # Looks dump but is actually the fastest way to solve it
        pila: list[str] = []
        for c in s:
            if c == "(":
                pila.append(c)
            elif c == ")":
                if not pila or pila[-1] != "(":
                    return False

                pila.pop()
            elif c == "{":
                pila.append(c)
            elif c == "}":
                if not pila or pila[-1] != "{":
                    return False

                pila.pop()
            elif c == "[":
                pila.append(c)
            else:
                if not pila or pila[-1] != "[":
                    return False

                pila.pop()

        return not pila
