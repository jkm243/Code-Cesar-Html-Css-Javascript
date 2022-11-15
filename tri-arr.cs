using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 
namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            string s ; 
            string result; 
            string key ;
            int n, m;
 
            Console.WriteLine("Введите размерность таблицы");
            n = Convert.ToInt32(Console.ReadLine());
            m = Convert.ToInt32(Console.ReadLine());
 
            char[,] mas = new char[n, m];
            
            //Заполняем таблицу алфавитом
            for (char i = 'А'; i <= 'Я'; i++)
                mas[(i - 'А') / m, (i - 'А') % m] = i;
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < m; j++)
                    Console.Write(mas[i, j] + " ");
                Console.WriteLine();
            }
 
            Console.WriteLine("Введите сообщение");
            s = Console.ReadLine();
 
            Console.WriteLine("Введите ключ");
            key = Console.ReadLine();
 
          key = new string(key.Distinct().ToArray()); //Удаляем повторения в ключе.
            Console.WriteLine("Ключ без повторяющихся смиволов: "+key);
 
            Console.ReadKey();
 
        }
    }
}