const sb = supabase.createClient(
  'https://lpjafusbsylwfrnreyco.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwamFmdXNic3lsd2ZybnJleWNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNjY3ODgsImV4cCI6MjA5NTk0Mjc4OH0.pkwhmdR8IuuHHzHjr5bxSX2rZKSJ6scP7RTVtWDq2Fg'
);

document.querySelector('form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const navn = document.getElementById('navn').value;
  const email = document.getElementById('email').value;
  const melding = document.getElementById('melding').value;

  const { error } = await sb.from('kontaktskjema').insert({ navn, email, melding });

  if (error) {
    alert(error.message);
  } else {
    alert('Takk! Vi tar kontakt snart.');
    e.target.reset();
  }
});