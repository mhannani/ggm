def update_optimizer_lr(optimizer, lr, decay):
    for param_group in optimizer.param_groups:
        param_group["lr"] = lr * decay