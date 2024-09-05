# Step 1: Configure the Azure Provider
provider "azurerm" {
  features {}
}

# Step 2: Define the Resource Group
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "West Europe"
}

# Step 3: Define the Storage Account
resource "azurerm_storage_account" "example" {
  name                     = "examplestorageacct"
  resource_group_name      = azurerm_resource_group.example.name
  location                 = azurerm_resource_group.example.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  kind                     = "StorageV2"

  tags = {
    environment = "staging"
  }
}