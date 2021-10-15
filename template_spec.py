from filename import function
#the filename doesn't need the .py
#if you need to import a not .py that's beyond the scope of this
#alternative:
#import filename #But now you have to refer to it as filename.function() instead of function()
import unittest

#Test methods MUST start with test
class ChangeMeTests(unittest.TestCase):
    def test_test_something(self):
        """Text"""
        given = function(args)
        expected = "change me"
        self.assertEqual(given , expected)


# Common Unit Tests:
# assertEqual(a, b) > a == b
# assertNotEqual(a, b) > a != b
# assertTrue(x) > bool(x) is True
# assertFalse(x) > bool(x) is False
# assertIs(a, b) > a is b
# assertIsNot(a, b) > a is not b
# assertIsNone(x) > x is None
# assertIsNotNone(x) > x is not None
# assertIn(a, b) > a in b
# assertNotIn(a, b) > a not in b
# assertIsInstance(a, b) > isinstance(a, b)
# assertNotIsInstance(a, b) > not isinstance(a, b)


if __name__ == '__main__':
    unittest.main()
#This tells the file to run a unittest method called main() that
#I assume runs all the tests we made if run directly. 
