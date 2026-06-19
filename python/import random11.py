# test_random.py
import sys

try:
    import random
    print("random module file:", getattr(random, "__file__", "built-in/module sem arquivo"))
    print("random has randint?:", hasattr(random, "randint"))
    print("random.randint(1,10) ->", random.randint(1, 10))
except Exception as e:
    print("Erro ao usar random:", type(e).__name__, e)
    sys.exit(1)

print("\nsys.path (primeiras entradas):", sys.path[:5])
