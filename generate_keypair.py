from stellar_sdk import Keypair

# Generate a new key pair
pair = Keypair.random()

# Print the secret and public keys
print(f"Secret: {pair.secret}")
print(f"Public Key: {pair.public_key}")
