get '/' do
  # @grandma = params[:grandma]

  erb :index
end

post '/grandma' do
  if params[:user_input] == params[:user_input].upcase
   ["So funny!", "Get a job!", "Something Funny"].sample
  else
    "Speak up Kiddo"
  end
end
