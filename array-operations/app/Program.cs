/*
Name: Resize

Assumptions:   
                - Array data is stored in memory heap.
                - Array address is stored in memory stack.
Input:          
                - Array data type
                - Array itself
                - New size
Processes:
                - Validations
                    - Valid number for new size
                    - Array != null
                    - Array != current size
                - Resize
                    - Create new empty array from the same type whit the new size.
                    - Move all items from sourse array to the new array.
                    - Assign the address of the new array for the source array address.
Outputs: 
                - Nothing

*/
using System.Runtime.InteropServices;
using System.Runtime.CompilerServices;
class Program
{
    public static void Main(string[] args)
    {
        int[] arr = new int[3] { 1, 2, 3 };

        OurArray our = new OurArray();
        our.Resize<int>(ref arr, 5);

        Console.WriteLine(String.Join(", ", arr));

        int item = our.GetAt<int>(arr, 2);
        Console.WriteLine(item);
    }
}
class OurArray
{
    public void Resize<T>(ref T[] source, int newSize)
    {
        if (newSize <= 0) return;
        if (source == null) return;
        if (source.Length == newSize) return;

        T[] newArray = new T[newSize];
        Buffer.BlockCopy(source, 0, newArray, 0, Buffer.ByteLength(source));

        source = newArray;

    }


    /*
    Name: GetAt

    Assumptions:   
                    - Array data is stored in memory heap.
                    - Array address is stored in memory stack.
    Input:          
                    - Array data type
                    - Array itself
                    - Index
    Processes:
                    - Validations
                        - Index is 0 or greater

                    - Get item
                        - Get the memory address of the 0 th item.
                        - Get the size of the data type of the array.
                        - Calculate the address of the given index.
                        - Get value from memory using the calculated address.

    Outputs: 
                    - Single item or default value.

    */

    public T GetAt<T>(T[] source, int index)
    {
        if (index < 0) return default(T)!;

        ref byte zeroAddress = ref MemoryMarshal.GetArrayDataReference((Array)source);
        ref byte indexReference = ref Unsafe.Add(ref zeroAddress, index * Unsafe.SizeOf<T>());
        ref T item = ref Unsafe.As<byte, T>(ref indexReference);

        return item;
    }

}