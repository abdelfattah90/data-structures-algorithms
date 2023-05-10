class Program
{
    public static void Main(string[] args)
    {
        int[] arr = new int[3] { 1, 2, 3 };
        OurArray our = new OurArray();
        our.Resize<int>(ref arr, 5);
        Console.WriteLine(String.Join(", ", arr));
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
    }
}