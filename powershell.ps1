c# Variables
$resourceGroupName = "myResourceGroup"
$location = "EastUS"
$storageAccountName = "mystorageaccount"
$skuName = "Standard_LRS"
$accessTier = "Hot"

# Login to Azure
Connect-AzAccount

# Create Resource Group
$resourceGroup = New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create Storage Account
$storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                                       -Name $storageAccountName `
                                       -Location $location `
                                       -SkuName $skuName `
                                       -Kind StorageV2 `
                                       -AccessTier $accessTier

# Output Storage Account details
$storageAccount