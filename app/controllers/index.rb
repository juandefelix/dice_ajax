require 'pry'

get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  # binding.pry
  # If the user passes-in a "value", let's use it. Otherwise, we'll generate a random one.
  # See: roll_if_value_is_nil method in the Roll model.


  roll = Roll.create
  # binding.pry
  roll.value.to_s


  # erb :index  # HINT: what does this do? what should we do instead?
end
