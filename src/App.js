import Image from 'next/image'

// Avatar bileşeninde, 'imageSrc' ve 'name' elementlerini prop olarak geçirin ve 'Tom Cook' metnini dinamik hale getirin.
// Tailwind CSS kullanarak aşağıdaki değişiklikleri yapın:
// 1. Görsel ile metin arasındaki boşluğu arttırmak için margin (ml) değeri ekleyin.
// 2. 'Profile bakın' metnini sağa hizalayarak metin hizalamasını değiştirin (text-right).
// 3. Metinlerin (isim ve profil metni) dikey hizalamasını daha belirgin hale getirin (flex-col ve justify-center).

function Avatar(props) {
  return (
    <div className='group block p-8 flex-shrink-0'>
      <div className='flex items-center flex-col justify-center items-center'>
        <div>
          <Image
            className='inline-block h-12 w-12 rounded-full '
            src={props.imageSrc}
            alt={props.name}
            width={500}
            height={500}
          />
        </div>
        <div className='ml-3'>
          <p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>
            {props.name}
          </p>
          <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700 text-right'>
            {props.profileText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return <Avatar profileText='Profile bakın' imageSrc="/photo.png" name=" Tom Cook" />
}
