# Juice Tank Mobile App

# Questions/Concerns

## Security

### BLE Too Open
BLE is open and broadcasts to _anyone listening_.
This is great for initial configuration, but horrible otherwise

How do we propose to lock down access to the appliance?
We can utilize BLE to register/setup appliance, 
- establish local network to communicate on
- register appliance with JuiceTank account
- etc.

Then disable BLE - ?
Or, disable more detailed charactersitics?

### Inter-Appliance Communication (future)
If we have multiple appliances, and they want/need to communicate with each other,
how do we ensure secure communication?
AWS uses an encryption scheme which relies on a hashed key tied to a timestamp... significanty more complex than I just stated... but ensures package has not been hacked in transport
We should use something akin to this for intra-communication, expecially if done over either BLE or local network

## Appliance Setup

### Factory Reset

There will be cases where we want to wipe all stored data from ESP32, for fresh install.

How do we do this?
    
### Register Appliance - No Cloud Yet

App enables user to apply local network settings to appliance

This is useful only if there is a single appliance on the network, and the appliance stores and serves a truncated history of activity 

1. Install and open Mobile App
2. Scan for Appliances (using BLE)
3. Apply Network Configuration to Appliance
4. Restart Appliance
5. Home Page should now show data via Network
