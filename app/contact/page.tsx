export default function ContactPage() {
  return (
    <main
      className="
max-w-4xl
mx-auto
px-6
py-16
"
    >
      <h1
        className="
text-4xl
font-bold
mb-8
"
      >
        Contact Us
      </h1>

      <div
        className="
bg-white
border
rounded-2xl
p-8
space-y-4
"
      >
        <p>
          📧 Email:
          <span className="font-medium ml-2">support@eventsphere.com</span>
        </p>

        <p>
          📞 Phone:
          <span className="font-medium ml-2">+880 1234 567890</span>
        </p>

        <p>
          📍 Location:
          <span className="font-medium ml-2">Bangladesh</span>
        </p>
      </div>
    </main>
  );
}
